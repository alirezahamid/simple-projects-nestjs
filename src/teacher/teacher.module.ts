import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';

@Module({
  controllers: [TeacherController, StudentTeacherController],
})
export class TeacherModule {}
