interface ButtonProps {
  clickFunc: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export default function Button({ clickFunc, text }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={clickFunc}
      className="border-c64light-purple m-5 border-2"
    >
      <p className="m-5 font-press-start text-c64light-purple">{text}</p>
    </button>
  );
}
