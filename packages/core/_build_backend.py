"""Build this Linux acceptance fixture with a PyPI-compatible wheel tag."""
import maturin


def build_wheel(wheel_directory, config_settings=None, metadata_directory=None):
    settings = dict(config_settings or {})
    settings["build-args"] = "--compatibility manylinux_2_39"
    return maturin.build_wheel(wheel_directory, settings, metadata_directory)


def __getattr__(name):
    return getattr(maturin, name)
