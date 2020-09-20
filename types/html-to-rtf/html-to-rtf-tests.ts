import * as htmlToRtf from 'html-to-rtf';

const html = `
<h1>Title <span style="color:rgb(255,0,0);">with</span> tag h1<h1>
<div>
  <p style="color:#333; margin:5px;" class="test" align="center">
      text of paragraph <b>text with bold <i>text with italic and bold</i></b><i>text with italic</i>
  </p>
  <p style="color:rgb(255,0,0);" align="right">red paragraph => right with tag</p>
  <p style="color:rgb(0,0,255); text-align:center;">blue paragraph => center with style</p>
  <table>
    <tbody>
      <tr>
        <td><mark>column 1</mark></td>
        <td>column 2</td>
        <td><mark>column 3</mark></td>
        <td>column 4</td>
      </tr>
      <tr>
        <td>content 1</td>
        <td>content 2<br></td>
        <td>content 3<br></td>
        <td>content 4<br></td>
      </tr>
    </tbody>
  </table>
</div>
`;
htmlToRtf.saveRtfInFile('<Path>/<FileName>.rtf', htmlToRtf.convertHtmlToRtf(html));
