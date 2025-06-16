import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    multiples: false,
    uploadDir: uploadDir,
    keepExtensions: true,
    filename: (name, ext, part) => {
      const timestamp = Date.now();
      const cleanName = part.originalFilename.replace(/\s+/g, "_");
      return `${timestamp}_${cleanName}`;
    },
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Upload failed" });
    }

    const file = files.file;
    const filename = path.basename(file.filepath);
    const fileUrl = `/uploads/${filename}`;
    const fullUrl = `${req.headers.origin || 'https://upload-rizky-maxv1.vercel.app'}${fileUrl}`;

    res.status(200).json({
      success: true,
      url: fullUrl,
      filename: file.originalFilename,
      size: file.size,
      type: file.mimetype,
    });
  });
}
