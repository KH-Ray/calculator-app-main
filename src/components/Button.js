export default function Button({ children, value, className, handleClick }) {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`${className}`}
      value={value}
    >
      {children}
    </button>
  );
}
