import React from 'react';

const Footer = () => {
    return (
         <footer className="bg-black text-neutral-content">
      <div className="mx-auto max-w-8xl px-10 py-10">
       
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold">CS — Ticket System</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400">
              Customer Support Zone is your one-stop place for help. Create tickets, track progress, and get quick answers from our support team. We’re here to make sure your issues get resolved smoothly and on time.
            </p>
          </div>

      
          <nav>
            <h6 className="mb-4 text-sm font-semibold text-neutral-200">Company</h6>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a className="hover:text-white" href="#">About Us</a></li>
              <li><a className="hover:text-white" href="#">Our Mission</a></li>
              <li><a className="hover:text-white" href="#">Contact Sales</a></li>
            </ul>
          </nav>

        
          <nav>
            <h6 className="mb-4 text-sm font-semibold text-neutral-200">Services</h6>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a className="hover:text-white" href="#">Products &amp; Services</a></li>
              <li><a className="hover:text-white" href="#">Customer Stories</a></li>
              <li><a className="hover:text-white" href="#">Download Apps</a></li>
            </ul>
          </nav>

        
          <nav>
            <h6 className="mb-4 text-sm font-semibold text-neutral-200">Information</h6>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms &amp; Conditions</a></li>
              <li><a className="hover:text-white" href="#">Join Us</a></li>
            </ul>
          </nav>

         
          <nav>
            <h6 className="mb-4 text-sm font-semibold text-neutral-200">Social Links</h6>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a className="flex items-center gap-2 hover:text-white" href="#">
                  <XIcon /> <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 hover:text-white" href="#">
                  <LinkedInIcon /> <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 hover:text-white" href="#">
                  <FacebookIcon /> <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 hover:text-white" href="mailto:support@cst.com">
                  <MailIcon /> <span>support@cst.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        
        <div className="mt-12 border-t border-neutral-800" />

        
        <p className="py-6 text-center text-xs text-neutral-400">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.9L4.9 22H2l7.3-8.4L1 2h6.9l4.8 6.3L18.9 2zm-1.2 18h1.7L6.3 3.9H4.5L17.7 20z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.5H4.5V23H0.5V8.5zM8.5 8.5H12.3V10.5h.1c.5-1 1.9-2.1 4-2.1 4.3 0 5.1 2.8 5.1 6.5V23h-4v-6.8c0-1.6 0-3.7-2.2-3.7s-2.6 1.8-2.6 3.6V23h-4V8.5z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
    
};

export default Footer;