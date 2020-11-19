import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PDFViewer = require('pdf-viewer-reactjs');

const sources = {
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
    base64: 'FtDWVuZG9iag1zdGFydHhyZWYNCjExNg0KJSVFT0YNCg==',
};

class Example extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            base64: sources.base64,
                        }}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: 'https://somewrongurl/tsjydyd.pdf',
                        }}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: 'https://somewrongurl/tsjydyd.pdf',
                        }}
                        alert={err => (
                            <div
                                style={{
                                    color: '#fa5b35',
                                    backgroundColor: '#0c0c0c',
                                }}
                            >
                                <h3 style={{ fontWeight: 'bolder' }}>Failed To load !!!</h3>
                                <h6>{err.message}</h6>
                            </div>
                        )}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        loader={<h2 style={{ color: '#fa5b35' }}>Custom loader element</h2>}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        page={5}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        scale={2}
                        scaleStep={0.5}
                        maxScale={5}
                        minScale={0.5}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        css="customViewer"
                        canvasCss="customCanvas"
                        navigation={{
                            css: {
                                navbarWrapper: 'customWrapper',
                                zoomOutBtn: 'customPrevBtn',
                                resetZoomBtn: 'customResetBtn',
                                zoomInBtn: 'customNextBtn',
                                previousPageBtn: 'customPrevBtn',
                                pageIndicator: 'customPages',
                                nextPageBtn: 'customNextBtn',
                                rotateLeftBtn: 'customPrevBtn',
                                resetRotationBtn: 'customResetBtn',
                                rotateRightBtn: 'customNextBtn',
                            },
                        }}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        css="customViewer"
                        navigation={<div>-</div>}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        onDocumentClick={() => alert('Document was clicked')}
                        onPrevBtnClick={page => alert(`Page ${page} selected`)}
                        onNextBtnClick={page => alert(`Page ${page} selected`)}
                        onZoom={scale => alert(`Zoom scale is ${scale}`)}
                        onRotation={angle => alert(`Page angle is ${angle}`)}
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        hideNavbar
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        hideZoom
                        hideRotation
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        navbarOnTop
                    />
                </div>
                <div>
                    <PDFViewer
                        document={{
                            url: sources.url,
                        }}
                        protectContent
                        watermark={{
                            text: 'WaterMark Demo !!!',
                            diagonal: true,
                            opacity: '0.5',
                            size: '72',
                            color: '#FF5733',
                        }}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Example />, document.getElementById('root'));
