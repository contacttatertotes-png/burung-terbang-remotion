# Bagaimana Burung Bisa Terbang

Project Remotion untuk video edukasi cutaway (45-60 detik) tentang prinsip terbang burung.

## Struktur
- `src/BirdFlight.tsx` — Komponen utama dengan sequence scene
- Target durasi: 45 detik (1350 frames @ 30fps)
- Resolusi: 1080x1920 (vertikal)

## Cara pakai
```bash
npm install
npm start          # buka Remotion Studio
npm run build      # render ke out/video.mp4
```

## Workflow yang disarankan
1. Modeling cutaway sayap di Blender
2. Export sebagai GLB
3. Load di Remotion pakai @remotion/three atau useGLTF
4. Sesuaikan timing teks & animasi

## Scene outline (45s)
1. Intro (0-6s)
2. Sayap cutaway (6-18s)
3. Tulang (18-30s)
4. Aliran udara & gaya angkat (30-42s)
5. Closing (42-45s)

Bisa diperpanjang sampai 60 detik dengan menambah detail otot, bulu, atau gerakan mengepak.