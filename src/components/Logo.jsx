// Logo image. The file lives in /public, so it is served from "/".
// To use your official logo: put it in /public (e.g. logo.png) and change LOGO_SRC below.
const LOGO_SRC = "/img/NSS_logo.png";

export default function Logo({
  size = 34,
  className,
  alt = "NSS logo",
  ...rest
}) {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain", display: "block" }}
      {...rest}
    />
  );
}
