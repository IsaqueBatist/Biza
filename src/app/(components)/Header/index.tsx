import "./style.d.css"
import Image from "next/image"
export default function Header() {
  return (
    <header className="header">
      <Image 
        src="/noicon.png"
        width={50}
        height={30}
        alt="Icon"
        className="icon"
      />
      <div className="usericon">
        <Image 
          src="/usericon.png"
          width={30}
          height={30}
          alt="User icon"
        />
      </div>
    </header>
  )
}