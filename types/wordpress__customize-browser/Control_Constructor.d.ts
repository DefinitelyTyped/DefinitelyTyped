import { BackgroundControl } from './BackgroundControl';
import { BackgroundPositionControl } from './BackgroundPositionControl';
import { CodeEditorControl } from './CodeEditorControl';
import { ColorControl } from './ColorControl';
import { CroppedImageControl } from './CroppedImageControl';
import { DateTimeControl } from './DateTimeControl';
import { HeaderControl } from './HeaderControl';
import { ImageControl } from './ImageControl';
import { MediaControl } from './MediaControl';
import { SiteIconControl } from './SiteIconControl';
import { ThemeControl } from './ThemeControl';
import { UploadControl } from './UploadControl';

export interface Control_Constructor {
    color: typeof ColorControl;
    media: typeof MediaControl;
    upload: typeof UploadControl;
    image: typeof ImageControl;
    cropped_image: typeof CroppedImageControl;
    site_icon: typeof SiteIconControl;
    header: typeof HeaderControl;
    background: typeof BackgroundControl;
    background_position: typeof BackgroundPositionControl;
    theme: typeof ThemeControl;
    date_time: typeof DateTimeControl;
    code_editor: typeof CodeEditorControl;
}
