import ModalLayout from './ModalLayout'
import Hero from './Hero'

const HeroLayout = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      <Hero />
      <ModalLayout />
    </section>
  )
}
export default HeroLayout
