import * as DeepSpeech from 'deepspeech';

const metadataItem: DeepSpeech.MetadataItem = {character: '', timestep: 0, start_time: 0.0};
const metadata: DeepSpeech.Metadata = {items: [metadataItem], num_items: 1, confidence: 0.0};
const model = new DeepSpeech.Model('/foo/bar', 1000);
