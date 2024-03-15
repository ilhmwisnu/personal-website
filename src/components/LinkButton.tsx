import { ReactNode } from "react";

const LinkButton = ({
  className,
  href,
  children,
}: {
  className?: string;
  href?: string;
  children?: ReactNode;
}) => {
  return (
    <a
      className={
        `px-4 py-3 neo text-black bg-primary ${className}`
      }
      href={href}
    >
      {children}
    </a>
  );
};

export default LinkButton;
