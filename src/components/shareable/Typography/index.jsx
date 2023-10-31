

export const H1 = ({ children, className = "" }) => {
  return <h1 className={`h1 ${className} animate__delay-1s`}>{children}</h1>;
};

export const H2 = ({ children, className = "" }) => {
  return <h2 className={`h2 ${className} animate__delay-1s`}>{children}</h2>;
};

export const H3 = ({ children, className = "" }) => {
  return <h3 className={`h3 ${className} animate__delay-1s`}>{children}</h3>;
};

export const H4 = ({ children, className = "" }) => {
  return <h4 className={`h4 ${className} animate__delay-1s`}>{children}</h4>;
};

export const H5 = ({ children, className = "" }) => {
  return <h5 className={`h5 ${className} animate__delay-1s`}>{children}</h5>;
};

export const H6 = ({ children, className = "" }) => {
  return <h6 className={`h6 ${className} animate__delay-1s`}>{children}</h6>;
};

export const P1 = ({ children, className = "" }) => {
  return <p className={`p1 ${className} animate__delay-1s`}>{children}</p>;
};

export const P2 = ({ children, className = "" }) => {
  return <p className={`p2 ${className} animate__delay-1s`}>{children}</p>;
};

export const Label1 = ({ children, className = "" }) => {
  return (
    <label className={`label1 ${className} animate__delay-1s`}>
      {children}
    </label>
  );
};

export const Label2 = ({ children, className = "" }) => {
  return (
    <label className={`label2 ${className} animate__delay-1s`}>
      {children}
    </label>
  );
};

export const Small = ({ children, className }) => {
  return (
    <span className={`__small  ${className} animate__delay-1s`}>
      {children}
    </span>
  );
};
