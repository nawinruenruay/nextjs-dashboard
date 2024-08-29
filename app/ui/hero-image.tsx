export function Desktophero() {
  return (
    <>
      <img
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </>
  );
}

export function Mobilehero() {
  return (
    <>
      <img
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </>
  );
}
