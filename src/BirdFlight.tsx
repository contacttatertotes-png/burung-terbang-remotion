import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from 'remotion';
import { ThreeCanvas } from '@remotion/three';

export const BirdFlight: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#87CEEB' }}>
      {/* Scene 1: Intro - 0-6s */}
      <Sequence from={0} durationInFrames={180}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: 80, textAlign: 'center', fontFamily: 'Arial' }}>
            Bagaimana Burung<br />Bisa Terbang?
          </h1>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 2: Wing cutaway - 6-18s */}
      <Sequence from={180} durationInFrames={360}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: 60, textAlign: 'center' }}>
            Rahasianya ada di sayap
          </div>
          {/* Placeholder for 3D cutaway - replace with Three.js or GLB later */}
          <ThreeCanvas width={1080} height={1920}>
            {/* Add wing model here */}
          </ThreeCanvas>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 3: Bones - 18-30s */}
      <Sequence from={540} durationInFrames={360}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: 55, textAlign: 'center', padding: 40 }}>
            Tulang ringan tapi kuat<br />
            (humerus, radius, ulna)
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 4: Airflow & lift - 30-42s */}
      <Sequence from={900} durationInFrames={360}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: 50, textAlign: 'center', padding: 40 }}>
            Udara di atas sayap lebih cepat<br />
            → tekanan lebih rendah<br />
            → burung terangkat
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 5: Closing - 42-45s */}
      <Sequence from={1260} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: 60, textAlign: 'center' }}>
            Prinsipnya sama<br />seperti sayap pesawat
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};