export default function FancyTxt({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-b border-b-[#18CBE4] text-[#18CBE4]">
      {children}
    </span>
  )
}
