<<<<<<< HEAD
=======







import { withPayload } from "@payloadcms/next/withPayload";
>>>>>>> payload-integration
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

<<<<<<< HEAD
export default nextConfig;
=======
export default withPayload(nextConfig);
>>>>>>> payload-integration
