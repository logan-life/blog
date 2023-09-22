---
layout: tilLayout
title: Working with base64 encoded java key stores and x509 certificates
date: 2023-09-22
topic: "java"
---



Some helpful commands for working with base64 encoded java key stores and x509 certificates. <!-- excerpt -->

Requires `keytool` and `base64` to be installed.

- `base64` is usually installed by default on most mac and linux systems.
- `keytool` is usually installed as part of the java development kit (JDK).

```bash
# Convert a base64 encoded string representing a java key store to a .jks file
echo paste_base64_string_here | base64 --decode > output.jks

# Or grab the base64 string from a file
base64 --decode input.jks > output.jks

#Import a PEM encoded x509 certificate into a java key store
keytool -import -alias insert_cert_alias_here -file insert_cer_file_path_here -storetype JKS -keystore output.jks

# Convert the java key store back to a base64 encoded string
base64 -i output.jks -o keystore.base64
```
