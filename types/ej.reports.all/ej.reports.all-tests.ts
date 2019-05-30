module ReportViewerComponent {
	$(function () {
        var report = new ej.ReportViewer($("#DefaultReportViewer"), {
			reportServiceUrl: (<any>window).baseurl + 'api/ReportViewer',
			processingMode: ej.ReportViewer.ProcessingMode.Remote,
            reportPath: "ConditionalFormating.rdl",
			isResponsive: true
		});
	});
}
