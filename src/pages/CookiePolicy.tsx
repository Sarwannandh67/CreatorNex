import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/90 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit
                our website. They are widely used to make websites work more efficiently and provide useful
                information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2>How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly. They enable
                  basic functions like page navigation and access to secure areas.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                  by collecting and reporting information anonymously.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Enable enhanced functionality and personalization, such
                  as remembering your preferences.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant
                  advertisements.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>Types of Cookies We Use</h2>
              <h3>First-Party Cookies</h3>
              <p>
                These are cookies that are set by our website directly. They are used to improve your browsing
                experience and enable basic functionality.
              </p>

              <h3>Third-Party Cookies</h3>
              <p>
                These are cookies set by our partners and service providers. They may include analytics
                services, advertising networks, and social media platforms.
              </p>
            </section>

            <section className="mb-8">
              <h2>Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul>
                <li>View cookies stored on your computer</li>
                <li>Delete individual or all cookies</li>
                <li>Block cookies from being set</li>
                <li>Allow or block cookies from specific websites</li>
              </ul>
              <p>
                Please note that blocking cookies may impact your experience on our website, as some features
                may not function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2>Cookie Consent</h2>
              <p>
                When you first visit our website, we will ask for your consent to set cookies. You can change
                your preferences at any time by clicking the "Cookie Settings" link in our footer.
              </p>
            </section>

            <section className="mb-8">
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at{" "}
                <a href="mailto:privacy@creatornex.com" className="text-primary hover:text-primary/90">
                  privacy@creatornex.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 