export default function Container({ customClass, children }) {
  return (
    <div
      className={`w-[1200px] flex flex-wrap justify-between ${customClass}`}
    >
      {children}
    </div>
  );
}
