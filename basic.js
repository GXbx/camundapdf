function demoFromHTML(namePDF, divName) {
    var pdf = new jsPDF('p', 'pt', 'letter');
    var image = 'data:image/jpeg;base64,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';
    
    source = $('#'+divName)[0];

    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    };
    margins = {
        top: 30,
        bottom: 30,
        left: 30,
        width: '100%'
    };
    pdf.addImage(image, 'JPEG', 500, 0, 100, 150);
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        pdf.save(namePDF+'.pdf');
    }, margins);
}
