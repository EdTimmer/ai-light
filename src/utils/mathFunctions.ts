export function getPentagonPositions(radius: number): [number, number, number][] {
    const positions: [number, number, number][] = [];
    const numVertices = 5;
    const angleStep = (2 * Math.PI) / numVertices;

    for (let i = 0; i < numVertices; i++) {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        positions.push([x, 0, z]);
    }

    return positions;
}

export function getPentagonRotations(): [number, number, number][] {
    const rotations: [number, number, number][] = [];
    const numVertices = 5;
    const angleStep = (2 * Math.PI) / numVertices;

    for (let i = 0; i < numVertices; i++) {
        // angle from +X axis for this vertex
        const angle = i * angleStep;
        // Rotate so the text faces outward from the center: map local +Z to outward vector
        // rotationY so local +Z points along the outward vector (x,z)
        const rotationY = angle - (Math.PI / 2);
        rotations.push([0, rotationY, 0]);
    }

    return rotations;
}

export function getFluctuatingRadius(
  minRadius: number,
  maxRadius: number,
  period: number, // in seconds
  time: number    // in seconds
): number {
  const mid = (minRadius + maxRadius) / 2;
  const amp = (maxRadius - minRadius) / 2;
  // sin(2πt/period) goes from –1 to +1
  return mid + amp * Math.sin((2 * Math.PI * time) / period);
}