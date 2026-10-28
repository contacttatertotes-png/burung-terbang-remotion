import { Composition } from 'remotion';
import { BirdFlight } from './BirdFlight';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BirdFlight"
        component={BirdFlight}
        durationInFrames={1350} // 45 seconds at 30fps
        fps={30}
        width={1080}
        height={1920} // vertical for social media, change if needed
      />
    </>
  );
};