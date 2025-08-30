import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  duration: number;
  subject: string;
  color: string;
}
const CompanionCard = ({
  id,
  name,
  topic,
  duration,
  subject,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card"  >
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image src={'/icons/bookmark.svg'} alt="Bookmark" width={12} height={12} />
        </button>
      </div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{name}</h2>
      <p className="text-sm text-slate-700 dark:text-slate-300">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src={'/icons/clock.svg'} alt="duration" width={12} height={12} />
        <p className="text-sm text-slate-600 dark:text-slate-400">{duration} mins</p>
      </div>

      <Link href={`/companions/${id}`} className="companion-link w-full">
        <button className="btn-primary w-full justify-center">Launch Lesson</button>
      </Link>
    </article>
  );
};

export default CompanionCard;
