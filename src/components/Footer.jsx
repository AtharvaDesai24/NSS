import { UNIT_NAME } from "../config";

export default function Footer() {
  return (
    <footer className="container footer">
      © {new Date().getFullYear()} {UNIT_NAME} · Not Me But You
      {/*<div className="credit">Website by Atharva Desai</div>*/}
    </footer>
  );
}
