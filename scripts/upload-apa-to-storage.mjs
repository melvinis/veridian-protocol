#!/usr/bin/env node
/**
 * One-shot uploader: pushes the Neo Digital APA into the private
 * `data-room-files` Supabase Storage bucket so the Data Room website
 * can serve it via signed URL.
 *
 * Run from the veridian-protocol/ directory:
 *
 *   SUPABASE_SERVICE_ROLE_KEY=<service_role_key> node scripts/upload-apa-to-storage.mjs
 *
 * The service-role key is required because the bucket is private and only
 * has an "authenticated can read" policy — uploads must bypass RLS.
 * Find it in: Supabase Dashboard > Project Settings > API > service_role.
 *
 * No npm install needed — uses the storage REST API directly.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";

const SUPABASE_URL = "https://byvnutmzhbjouqkusdqh.supabase.co";
const BUCKET = "data-room-files";
const STORAGE_PATH =
  "Transaction - Neo Digital/VP-APA-001-2026 Asset Purchase Agreement - Neo Digital.docx";
// Local source file (relative to repo root / this script's parent dir):
const LOCAL_FILE = path.resolve(
  process.cwd(),
  "..",
  "Veridian_Data_Room",
  "00 Transaction - Neo Digital",
  "VP-APA-001-2026 Asset Purchase Agreement - Neo Digital.docx"
);

const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!key) {
  console.error("ERROR: set SUPABASE_SERVICE_ROLE_KEY in the environment.");
  process.exit(1);
}

const body = await readFile(LOCAL_FILE);
const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${encodeURI(STORAGE_PATH)}`;

const res = await fetch(url, {
  method: "POST", // use PUT to overwrite an existing object
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "x-upsert": "true",
  },
  body,
});

if (res.ok) {
  console.log(`✓ Uploaded: ${STORAGE_PATH}`);
} else {
  console.error(`✗ Upload failed (${res.status}): ${await res.text()}`);
  process.exit(1);
}
