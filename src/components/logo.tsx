import logo from "../assets/images/mbaisedi.png";

type Props = {
  size?: string;
  className?: string;
};
export const Logo = ({ size, className }: Props) => {
  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={logo} alt="Mbaisedi" className="size-full object-contain" />
    </div>
  );
};
