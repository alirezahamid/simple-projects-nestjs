import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string) {
    return `Get All Students That Belong To A teacher ${teacherId}`;
  }
  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ) {
    return `Update Student with ID ${studentId} and Teacher with ID ${teacherId} and the body of ${JSON.stringify(
      body,
    )}`;
  }
}
