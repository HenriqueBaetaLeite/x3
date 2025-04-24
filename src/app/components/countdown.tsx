"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Clock, Timer, AlarmClock } from "lucide-react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-10T09:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  const timeStyle =
    "flex flex-col items-center gap-1 px-3 py-2 bg-gray-800 rounded-xl shadow-md shadow-gray-900";

  const labelStyle = "text-sm text-gray-400";

  return (
    <div className="flex gap-4 justify-center text-yellow-400">
      <div className={timeStyle}>
        <CalendarClock className="w-6 h-6" />
        <motion.span
          key={timeLeft.days}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold"
        >
          {timeLeft.days}
        </motion.span>
        <span className={labelStyle}>dias</span>
      </div>

      <div className={timeStyle}>
        <Clock className="w-6 h-6" />
        <motion.span
          key={timeLeft.hours}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold"
        >
          {timeLeft.hours}
        </motion.span>
        <span className={labelStyle}>horas</span>
      </div>

      <div className={timeStyle}>
        <Timer className="w-6 h-6" />
        <motion.span
          key={timeLeft.minutes}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold"
        >
          {timeLeft.minutes}
        </motion.span>
        <span className={labelStyle}>min</span>
      </div>

      <div className={timeStyle}>
        <AlarmClock className="w-6 h-6" />
        <motion.span
          key={timeLeft.seconds}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold"
        >
          {timeLeft.seconds}
        </motion.span>
        <span className={labelStyle}>seg</span>
      </div>
    </div>
  );
}
