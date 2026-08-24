from setuptools import setup, find_packages

setup(
    name="fasl-i-fuzuli",
    version="2.0.0",
    packages=find_packages(),
    package_data={"araclar": ["*.json"]},
    include_package_data=True,
    entry_points={
        "console_scripts": [
            "fuzuli=araclar.fuzuli_cli:main",
        ],
    },
)
