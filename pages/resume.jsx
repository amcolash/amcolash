import { Resume } from '../components/resume/Resume';

import resumeData from '../lib/resume.json5';

export default function ResumePage() {
  return <Resume {...resumeData} />;
}
