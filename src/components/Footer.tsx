const Footer = () => (
  <footer className="bg-primary py-14 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="font-display text-2xl font-bold text-primary-foreground">
          Rodrick Cheruiyot<span className="text-gradient-gold">.</span>
        </p>
        <p className="text-primary-foreground/60 text-sm">Managing Director · Brightspace Engineering</p>
        <div className="w-12 h-px bg-accent/50 my-3" />
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Rodrick Cheruiyot. Built with precision.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
