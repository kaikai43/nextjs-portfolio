import Image from 'next/image';
import {
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-3 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jinkt/"
            className="flex items-center gap-2"
          >
            <LinkedinIcon />
            <div className="ml-3 mt-1">View my LinkedIn profile</div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/kaikai43"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            <div className="ml-3">Visit my GitHub page</div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:jin@jinkt.dev"
            className="flex ju items-center gap-2"
          >
            <MailIcon />
            <div className="ml-3">Send me an email</div>
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
    </section>
  );
}
