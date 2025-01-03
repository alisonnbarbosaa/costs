export default function Container({ customClass, children }) {
  return (
    <div className={`w-full flex flex-wrap justify-between ${customClass}`}>
      {children}
    </div>
  );
}
