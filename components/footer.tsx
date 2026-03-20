export default function Footer() {
  return (
    <footer className="py-6 border-t border-white/10 bg-transparent backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Manish Choudhary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
