export default function Home() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#1c1a17',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <p style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(4rem, 12vw, 14vw)',
        color: '#c5a065',
        textAlign: 'center',
        lineHeight: 1,
        margin: 0,
        letterSpacing: '0.02em',
      }}>
        coming real soon
      </p>
    </div>
  );
}
