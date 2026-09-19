import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  className = '',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span className="btn__text">{children}</span>
        {icon && <span className="btn__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      <span className="btn__text">{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  );
}
