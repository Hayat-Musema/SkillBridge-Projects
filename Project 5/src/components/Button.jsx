function Button({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'secondary',
}) {
  return (
    <button
      className={`button button-${variant} ${className}`.trim()}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
