import Link from "next/link";
import styles from "../styles/PageGallery.module.css";

export default function PageGalleryCard({ href, thumb, title, file }) {
  return (
    <Link href={href} className={styles.card} target="_blank" rel="noopener">
      <div className={styles.thumbWrap}>
        <img src={thumb} alt={`${title} thumbnail`} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{title}</p>
        <span className={styles.cardFile}>{file}</span>
      </div>
    </Link>
  );
}
