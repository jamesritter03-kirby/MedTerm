# 3D model files

Drop realistic anatomy models here as **`.glb`** (or `.gltf`) files, then point a
body system at the file in [`../js/data.js`](../js/data.js). For example:

```js
{
  id: "cardiovascular",
  name: "Cardiovascular System",
  model: "cardiovascular",   // procedural fallback (used if the file is missing)
  file: "models/heart.glb",  // ← realistic model shown when present
  ...
}
```

If `file` is `null` or the file can't be loaded, the app automatically falls back
to the built-in procedural model, so nothing ever breaks. Models are
auto-centered and scaled to fit the viewer, so they don't need special prep.

## Where to get free, properly-licensed models

| Source | Link | License | Notes |
| --- | --- | --- | --- |
| **NIH 3D** | <https://3d.nih.gov> | Mostly public domain / CC | Heart Library & organ models; exports STL/GLB/OBJ |
| **BodyParts3D** | <https://lifesciencedb.jp/bp3d/> | CC BY-SA 2.1 JP | Individual organs/bones/vessels (OBJ) — attribution required |
| **Z-Anatomy** | <https://github.com/LluisV/Z-Anatomy> | CC BY-SA 4.0 | Full-body atlas (.blend / FBX) — attribution required |
| **Smithsonian Open Access** | <https://3d.si.edu> | CC0 / public domain | Some anatomical specimens |

## Converting to .glb

Many sources provide OBJ/FBX/.blend rather than glTF. To convert:

- **Online:** drag the file into <https://products.aspose.app/3d/conversion> or
  another glTF converter.
- **Blender (free):** `File → Import` the model, then
  `File → Export → glTF 2.0 (.glb)`.
- **CLI:** `npx obj2gltf -i model.obj -o model.glb` (for OBJ files).

Keep files reasonably small (ideally under ~10–20 MB each) so the page loads
quickly and stays within GitHub Pages limits.

## ⚖️ Attribution

The **CC BY-SA** sources (BodyParts3D, Z-Anatomy) require that you credit the
creator and share any modifications under the same license. Add the credit to
the main project [`README.md`](../README.md) when you include their models.
