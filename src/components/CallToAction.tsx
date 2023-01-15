interface CTAProps {
  text: string;
  href: string;
  color?: string;
}

const CallToAction = ({ text, href, color = "" }: CTAProps) => {
  return (
    <a className={`cta text-xl ${color}`} href={href}>
      <span>{text}</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          aria-hidden="true"
        >
          <path
            d="M7 1.167L12.833 7 7 12.833M12.25 7H1.167"
            fill="transparent"
            strokeWidth="2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      </span>
    </a>
  );
};

export { CallToAction };
