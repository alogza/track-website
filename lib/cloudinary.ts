// lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";
import { UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// ⬇️ أضف دالة الرفع
export async function uploadToCloudinary(filePath: string): Promise<UploadApiResponse> {
  return await cloudinary.uploader.upload(filePath, {
    folder: "track", // يمكنك تغيير الاسم حسب مجلدك في Cloudinary
  });
}
