from IPython import embed
from requests import get
from requests.exceptions import RequestException
from contextlib import closing
import pandas as pd

def simple_get(url):
    """
    Attempts to get the content at `url` by making an HTTP GET request.
    If the content-type of response is some kind of HTML/XML, return the
    text content, otherwise return None
    """
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return None


def is_good_response(resp):
    """
    Returns true if the response seems to be Markdown, false otherwise
    """
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200 
            and content_type is not None 
            and content_type.find('text/plain') > -1)


def log_error(e):
    """
    It is always a good idea to log errors. 
    This function just prints them, but you can
    make it do anything.
    """
    print(e)

def read_markdown(raw_md):
    """ Reads the raw MarkDown and return the table and callback strings """
    read_table = False
    read_callback = False
    data = []
    data_callback = []
    for line in raw_md.split(b'\n'):
        line = line.decode('UTF-8')
        if line == '| Option | Data-Attr | Defaults | Type | Description |':
            read_table = True
        if read_table:
            data.append([col.strip().strip('`') for col in line.split('|') if col])
        if line == '## Description of data passed to callbacks (onChange and etc.)':
            read_table=False
        if line == '## Description of data passed to callbacks (onChange and etc.)':
            read_callback = True
        if read_callback:
            data_callback.append(line)
        if line == '## Creating slider (all params)':
            read_callback = False
    data = [row for row in data[:-1] if row]
    data_callback = [row for row in data_callback[4:-4] if row]

    return data, data_callback

def split_callback_line(line):
    split_1 = line.split(':')
    name = split_1[0].strip().strip('"')
    split_2 = split_1[1].split('//')
    val = split_2[0].strip().rstrip(',')
    comment = split_2[1].strip()
    return (name, val, comment)

def data_callback_to_frame(data_callback):
    """ Converts the split callback lines to a pd.DataFrame """
    data = []
    for line in data_callback:
        name, val, comment = split_callback_line(line)
        valtype = type(eval(val))
        if valtype == str:
            typetype = 'string'
        elif valtype == int or valtype == float:
            typetype = 'number'
        elif valtype == type:
            typetype = 'JQuery'
        else:
            raise Exception("Could not parse '{!s}'".format(name))
        data.append((name, typetype, comment))
        #fmt = '    {!s}: {!s} {!s}'
        #row_fmt = fmt.format(name, typetype, comment)
    df = pd.DataFrame(data, columns=['Name', 'Type', 'Description'])
    df.set_index('Name', inplace=True)
    return df

def data_options_to_frame(data):
    options = pd.DataFrame(data[2:], columns=data[0])
    options.set_index('Option', inplace=True)
    options.loc[('onStart', 'onChange', 'onFinish', 'onUpdate') , 'Type'] = \
            '(obj: IonRangeSliderEvent) => void'
    options.loc[('prettify') , 'Type'] = '(num: number) => string'
    options.loc[options['Type'] == 'array', 'Type'] = 'any[]'
    options.loc[options['Type'] == 'object', 'Type'] = 'any'
    return options

def df_options_to_lines(df):
    max_name = max(len(name) for name in df.index)
    avg_type = sum(len(name) for name in df['Type']) / len(df['Type'])

    lines = []
    for row in df.iterrows():
        name = row[0]
        attrs = row[1]
        #fmt = '    {:<' + str(max_name + 2) + '} {:<' + str(avg_type + 1) + '} // {!s} [Default: {!s}]\n'
        fmt = '    {!s}?: {:<' + str(avg_type + 1) + '} // {!s} [Default: {!s}]\n'
        row_fmt = fmt.format(name, attrs['Type'] + ';', attrs['Description'], attrs['Defaults'])
        lines.append(row_fmt)
    return lines

def df_callback_to_lines(df):
    max_name = max(len(name) for name in df.index)
    max_type = max(len(name) for name in df['Type'])
    lines = []
    for row in df.iterrows():
        name = row[0]
        attrs = row[1]
        #fmt = '    {:<' + str(max_name + 1) + '} {:<' + str(max_type + 1) + '} // {!s} \n'
        fmt = '    {!s}: {:<' + str(max_type + 1) + '} // {!s}\n'
        row_fmt = fmt.format(name, attrs['Type'] + ';', attrs['Description'])
        lines.append(row_fmt)
    return lines



raw_md = simple_get('https://raw.githubusercontent.com/IonDen/ion.rangeSlider/master/readme.md')
data_options, data_callback = read_markdown(raw_md)
df_callback = data_callback_to_frame(data_callback)
df_options = data_options_to_frame(data_options)
lines_options = df_options_to_lines(df_options)
lines_callback = df_callback_to_lines(df_callback)

new_lines = []
with open('./index_template.d.ts', 'r') as file:
    for line in file:
        if line.strip() == '// Put options here':
            new_lines.extend(lines_options)
        elif line.strip() == '// Put callback here':
            new_lines.extend(lines_callback)
        else:
            new_lines.append(line)

with open('index.d.ts', 'w') as file:
    file.writelines(new_lines)

