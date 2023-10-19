import "./qr.scss";
import QRCodeImg from "@/assets/image-qr-code.png";
import Image from "next/image";

export default function QR() {
  return (
    <section id="qr-code">
      <div className="card">
        <div className="img">
          <Image src={QRCodeImg} alt="QRCodeImg" />
        </div>
        <div className="text">
          <h3>Improve your front-end skills by building projects</h3>
          <h4>
            Scan the QR code to visit Frontend Mentor to take your coding skills
            to the next level
          </h4>
        </div>
      </div>
    </section>
  );
}
