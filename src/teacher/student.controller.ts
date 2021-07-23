import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto {
    return `Get All Students That Belong To A teacher ${teacherId}`;
  }
  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ): StudentResponseDto {
    return `Update Student with ID ${studentId} and Teacher with ID ${teacherId} and the body of ${JSON.stringify(
      body,
    )}`;
  }
}
