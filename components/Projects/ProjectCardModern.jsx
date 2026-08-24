import Image from "next/image";
import { PROJECT_LOGOS } from "./images";

const LinkIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ProjectCardModern = ({ project }) => {
  const { name, logoKey, description, techStack, link } = project;
  const logo = PROJECT_LOGOS?.[logoKey];

  return (
    <div className="rounded-2xl border border-gray-dark-1 bg-[#0d0f14] p-6 w-full h-[420px] flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-white flex items-center justify-center">
          {logo ? (
            <Image src={logo} alt={name} width={64} height={64} />
          ) : (
            <span className="text-black text-xs font-medium">
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
          
        </div>
        <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-white leading-snug pt-1">
          {name}
        </h3>
        {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-gray-light-1 transition-colors w-fit"
          aria-label={`Visit ${name}`}
        >
          <LinkIcon />
        </a>
      )}
        </div>
      </div>

      {techStack?.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-gray-light-2 mb-2">Tech Stack</p>
          <div className="flex items-center gap-3 flex-wrap">
            {techStack.map((tech) => (
              <Image
                key={tech}
                src={`/skills/${tech}.svg`}
                alt={tech}
                width={22}
                height={22}
              />
            ))}
          </div>
        </div>
      )}

      <p
        className="text-gray-light-2 text-xl leading-relaxed overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </p>

    </div>
  );
};

export default ProjectCardModern;