import { convertPDF } from 'pdf2image';

// converts all the pages of the given pdf using the default options
convertPDF('example.pdf').then(
    (pageList) => {
        console.log(pageList);
    }
);
