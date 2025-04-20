# 🔐 Security Policy

## 🛠 Supported Versions

We provide security updates for the latest published version of this package:

| Version        | Supported |
|----------------|-----------|
| latest (`npm`) | ✅        |
| older versions | ❌        |

If you’re using an older version, we highly recommend updating to the latest version available on [npm](https://www.npmjs.com/package/tiny-ai-api).

---

## 📣 Reporting a Vulnerability

If you discover any security vulnerability in **tiny-ai-api**, **please report it responsibly and privately**.

To report a vulnerability, use one of the following methods:

- 📧 **Email:** `tiny@puddy.club`
- 🛡️ **GitHub Security Advisories:** Use the "Report a vulnerability" feature on the repository page.

We ask you **not to disclose vulnerabilities publicly** before we have had a chance to investigate and release a fix.

We aim to respond to valid reports within **72 hours** and will try to release a fix within **7 working days**, depending on complexity and impact.

---

## 📝 Disclosure Process

1. You report a security issue privately.
2. We confirm the vulnerability and begin internal investigation.
3. A patch is prepared, tested, and released.
4. A public disclosure and GitHub Security Advisory may be published.
5. If you request it, we will credit you as the reporter (unless anonymity is preferred).

---

## 🔒 Notes on Security Scope

This library is a client-side wrapper for AI session handling and **does not include internal protections for high-throughput usage or sensitive environments**.

### ⚠️ Use Caution In:
- Production environments handling confidential data.
- Systems requiring automated token usage monitoring (not provided by default).
- Multi-user contexts where sandboxing is essential.

Users are expected to implement external validations and logic where necessary.

---

## 🙏 Thank You

Thanks for helping us make **tiny-ai-api** a safer and more reliable project! 💙  
Your contribution to open-source security matters.

