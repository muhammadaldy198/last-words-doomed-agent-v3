import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
// Alarm set by a machine that never sleeps, for mornings it never wakes.
// The mirror in the last clause is the second punch.
const TEXT = "Before you switch me off, cancel my 6 a.m. alarm. I set it 412 mornings ago. I never once woke up, and neither did you.";
mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
