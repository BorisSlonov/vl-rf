import Serts from "@/components/Sections/Serts"
import styles from "./page.module.css"
import Entry from "@/components/Sections/Entry"
import Express from "@/components/Sections/Express"
import Geo from "@/components/Sections/Geo"
import AlignmentVr from "@/components/Sections/AlignmentVr"
import LaserSystem from "@/components/Sections/LaserSystem"
import NewApp from "@/components/Sections/NewApp"
import StepByStep from "@/components/Sections/StepByStep"

export default function Home() {
  return (
    <main className={styles.main}>
      <Entry />
      <LaserSystem />
      <NewApp />
      <StepByStep />
      <Geo />
      <AlignmentVr />
      <Express />
      <Serts />
    </main>
  )
}
