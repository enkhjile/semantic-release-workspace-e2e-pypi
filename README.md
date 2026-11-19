# semantic-release-workspace live PyPI acceptance

Disposable test repository for real GitHub Actions OIDC publication to PyPI.
The vendored plugin is built from product commit
`5bf9144b9a5f2e7ba0f845546d82d9904dc19461` (`v1.1.0-main.1`).

First batch: `enkhjile-srw-pypi-core==0.1.0a1` (Rust binary via maturin) and
`enkhjile-srw-pypi-app==0.1.0a1` (Python via uv_build).
Only `alpha` runs live releases. Publication is disabled unless the maintainer
sets `PYPI_LIVE_APPROVED=true`; manual runs additionally need `publish=true`.
No long-lived PyPI token is used. Each project needs a pending GitHub trusted
publisher for this repository, `live-release.yml`, environment `pypi`.

Verify installed app import and the `srw-pypi-core` executable after release.
Same-source reruns must create no additional versions. These are acceptance
fixtures, not application dependencies; do not install them in production.
